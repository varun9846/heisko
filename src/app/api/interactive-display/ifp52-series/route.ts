import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFP52SeriesResponse, IFP52SeriesError } from '@/lib/types'

/**
 * GET /api/interactive-display/ifp52-series
 * Fetches all IFP52 series interactive display products from the database
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFP52SeriesResponse | IFP52SeriesError>> {
  try {
    // Fetch all IFP52 series products from database
    const products = await prisma.interactiveDisplayIFP52.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFP52 series products`
    })

  } catch (error) {
    console.error('Error fetching IFP52 series data:', error)
    
    // Return error response
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFP52 series data from database'
      },
      { status: 500 }
    )
  }
} 