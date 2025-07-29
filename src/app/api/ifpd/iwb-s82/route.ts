import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IWBS82Response, IWBS82Error } from '@/lib/types'

/**
 * GET /api/ifpd/iwb-s82
 * Fetches all IWBS82 series interactive display products from the database
 * Returns a structured response with success status and data
 * 
 * IWBS82 series features:
 * - Advanced interactive whiteboard technology
 * - Premium touch capabilities
 * - Professional-grade display quality
 * - Enhanced collaboration tools
 */
export async function GET(request: NextRequest): Promise<NextResponse<IWBS82Response | IWBS82Error>> {
  try {
    // Fetch all IWBS82 series products from database
    const products = await prisma.iWBS82.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} IWBS82 series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IWBS82 series products`
    })

  } catch (error) {
    console.error('❌ Error fetching IWBS82 series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IWBS82 series data from database'
      },
      { status: 500 }
    )
  }
} 