import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFP50SeriesResponse, IFP50SeriesError } from '@/lib/types'

/**
 * GET /api/interactive-display/ifp50-series
 * Fetches all IFP50 series interactive display products from the database
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFP50SeriesResponse | IFP50SeriesError>> {
  try {
    // Fetch all IFP50 series products from database
    const products = await prisma.interactiveDisplayIFP50.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFP50 series products`
    })

  } catch (error) {
    console.error('Error fetching IFP50 series data:', error)
    
    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFP50 series data from database'
      },
      { status: 500 }
    )
  }
} 