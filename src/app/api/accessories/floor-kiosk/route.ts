import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { ASFloorKioskResponse, ASFloorKioskError } from '@/lib/types'

/**
 * GET /api/accessories/floor-kiosk
 * Fetches all ASFloorKiosk series products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<ASFloorKioskResponse | ASFloorKioskError>> {
  try {
    // Fetch all ASFloorKiosk series products from database
    const products = await prisma.aSFloorKiosk.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} Floor Kiosk products`
    })

  } catch (error) {
    console.error('❌ Error fetching Floor Kiosk data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch Floor Kiosk data from database'
      },
      { status: 500 }
    )
  }
} 