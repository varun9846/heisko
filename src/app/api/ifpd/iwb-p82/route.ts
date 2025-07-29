import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IWBP82Response, IWBP82Error } from '@/lib/types'

/**
 * GET /api/ifpd/iwb-p82
 * Fetches all IWBP82 series interactive display products from the database
 * Returns a structured response with success status and data
 * 
 * IWBP82 series features:
 * - Professional panel technology
 * - Enhanced touch capabilities
 * - Premium display quality
 * - Advanced collaboration tools
 * - Enterprise-grade connectivity
 */
export async function GET(request: NextRequest): Promise<NextResponse<IWBP82Response | IWBP82Error>> {
  try {
    // Fetch all IWBP82 series products from database
    const products = await prisma.iWBP82.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} IWBP82 series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IWBP82 series products`
    })

  } catch (error) {
    console.error('❌ Error fetching IWBP82 series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IWBP82 series data from database'
      },
      { status: 500 }
    )
  }
} 