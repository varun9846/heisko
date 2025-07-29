import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFPDADV311d2Response, IFPDADV311d2Error } from '@/lib/types'

/**
 * GET /api/ifpd/adv311d2
 * Fetches all IFPDADV311d2 series interactive display products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFPDADV311d2Response | IFPDADV311d2Error>> {
  try {
    // Fetch all IFPDADV311d2 series products from database
    const products = await prisma.iFPDADV311d2.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    (`✅ Successfully fetched ${products.length} IFPDADV311d2 series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFPDADV311d2 series products`
    })

  } catch (error) {
    console.error('❌ Error fetching IFPDADV311d2 series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFPDADV311d2 series data from database'
      },
      { status: 500 }
    )
  }
} 