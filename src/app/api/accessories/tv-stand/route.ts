import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { ATVStandResponse, ATVStandError } from '@/lib/types'

/**
 * GET /api/accessories/tv-stand
 * Fetches all ATVStand series products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<ATVStandResponse | ATVStandError>> {
  try {
    // Fetch all ATVStand series products from database
    const products = await prisma.aTVStand.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} TV Stand products`
    })

  } catch (error) {
    console.error('❌ Error fetching TV Stand data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch TV Stand data from database'
      },
      { status: 500 }
    )
  }
} 