import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/products/all
 * Fetches all products from all categories and returns them organized by category
 * Returns a structured response with success status and data grouped by series
 */
export async function GET(request: NextRequest) {
  try {
    // Fetch all products from all categories concurrently
    const [
      ifp50Products,
      ifp51Products,
      ifp52Products,
      ifp62Products,
      rk3588Products,
      adv311d2Products,
      t982Products,
      adv100Products,
      iwbS82Products,
      iwbP82Products,
      smartBlackboardM86Products,
      smartBlackboardM86LBProducts,
      smartTouchTableProducts,
      smartLiftingTouchTableProducts,
      smartTVLTSProducts,
      floorKioskProducts,
      portablePanelProducts,
      meetingPodProducts,
      tvStandProducts,
      opsProducts
    ] = await Promise.all([
      prisma.interactiveDisplayIFP50.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.interactiveDisplayIFP51.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.interactiveDisplayIFP52.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.interactiveDisplayIFP62.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.iFPDRK3588.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.iFPDADV311d2.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.iFPDT982.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.iFPDADV100.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.iWBS82.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.iWBP82.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.smartBlackboardM86.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.smartBlackboardM86LB.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.smartTouchTable.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.smartLiftingTouchTable.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.smartTVLTS.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.aSFloorKiosk.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.portablePanel.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.aMeetingPod.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.aTVStand.findMany({ orderBy: { createdAt: 'desc' } }),
      prisma.oPS1.findMany({ orderBy: { createdAt: 'desc' } })
    ])

    // Organize products by category
    const allProducts = {
      'IFP50 Series': ifp50Products,
      'IFP51 Series': ifp51Products,
      'IFP52 Series': ifp52Products,
      'IFP62 Series': ifp62Products,
      'RK3588 Series': rk3588Products,
      'ADV311D2 Series': adv311d2Products,
      'T982 Series': t982Products,
      'ADV100 Series': adv100Products,
      'IWBS82 Series': iwbS82Products,
      'IWBP82 Series': iwbP82Products,
      'SmartBlackboardM86 Series': smartBlackboardM86Products,
      'SmartBlackboardM86LB Series': smartBlackboardM86LBProducts,
      'SmartTouchTable Series': smartTouchTableProducts,
      'SmartLiftingTouchTable Series': smartLiftingTouchTableProducts,
      'SmartTVLTS Series': smartTVLTSProducts,
      'Floor Kiosk Series': floorKioskProducts,
      'Portable Panel Series': portablePanelProducts,
      'Meeting Pod Series': meetingPodProducts,
      'TV Stand Series': tvStandProducts,
      'OPS Series': opsProducts
    }

    // Calculate total products
    const totalProducts = Object.values(allProducts).reduce((sum, products) => sum + products.length, 0)

    // Return successful response with organized data
    return NextResponse.json({
      success: true,
      data: allProducts,
      totalProducts,
      totalCategories: Object.keys(allProducts).length,
      message: `Successfully fetched ${totalProducts} products across ${Object.keys(allProducts).length} categories`
    })

  } catch (error) {
    console.error('❌ Error fetching all products:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch products from database'
      },
      { status: 500 }
    )
  }
}
