import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { OPS1Response, OPS1Error } from '@/lib/types'

/**
 * GET /api/accessories/ops
 * Fetches all OPS1 series products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<OPS1Response | OPS1Error>> {
  try {
    // Fetch all OPS1 series products from database
    const products = await prisma.oPS1.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} OPS products`
    })

  } catch (error) {
    console.error('❌ Error fetching OPS data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch OPS data from database'
      },
      { status: 500 }
    )
  }
} 