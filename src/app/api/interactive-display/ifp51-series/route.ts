import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFP51SeriesResponse, IFP51SeriesError } from '@/lib/types'

/**
 * GET /api/interactive-display/ifp51-series
 * Fetches all IFP51 series interactive display products from the database
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFP51SeriesResponse | IFP51SeriesError>> {
  try {
    // Fetch all IFP51 series products from database
    const products = await prisma.interactiveDisplayIFP51.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFP51 series products`
    })

  } catch (error) {
    console.error('Error fetching IFP51 series data:', error)
    
    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFP51 series data from database'
      },
      { status: 500 }
    )
  }
} 