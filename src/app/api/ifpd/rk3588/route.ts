import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFPDRK3588Response, IFPDRK3588Error } from '@/lib/types'

/**
 * GET /api/ifpd/rk3588
 * Fetches all IFPDRK3588 series interactive display products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFPDRK3588Response | IFPDRK3588Error>> {
  try {
    // Fetch all IFPDRK3588 series products from database
    const products = await prisma.iFPDRK3588.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} IFPDRK3588 series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFPDRK3588 series products`
    })

  } catch (error) {
    console.error('❌ Error fetching IFPDRK3588 series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFPDRK3588 series data from database'
      },
      { status: 500 }
    )
  }
} 