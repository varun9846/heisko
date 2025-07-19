import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFP62SeriesResponse, IFP62SeriesError } from '@/lib/types'

/**
 * GET /api/interactive-display/ifp62-series
 * Fetches all IFP62 series interactive display products from the database
 * 
 * This endpoint provides access to the premium IFP62 series products
 * designed for executive environments and high-security facilities
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFP62SeriesResponse | IFP62SeriesError>> {
  try {
    // Fetch all IFP62 series products from database
    // Ordered by creation date to show newest products first
    const products = await prisma.interactiveDisplayIFP62.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFP62 series products`
    })

  } catch (error) {
    console.error('Error fetching IFP62 series data:', error)
    
    // Return error response with appropriate status code
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFP62 series data from database'
      },
      { status: 500 }
    )
  }
} 