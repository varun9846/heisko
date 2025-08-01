import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { SmartTouchTableResponse, SmartTouchTableError } from '@/lib/types'

/**
 * GET /api/smart-solutions/smart-touch-table
 * Fetches all SmartTouchTable series touch table products from the database
 * Returns a structured response with success status and data
 * 
 * SmartTouchTable series features:
 * - Advanced touch table technology
 * - Multi-user collaboration capabilities
 * - Gesture recognition and interactive features
 * - Content sharing and presentation tools
 * - Smart connectivity solutions
 */
export async function GET(request: NextRequest): Promise<NextResponse<SmartTouchTableResponse | SmartTouchTableError>> {
  try {
    // Fetch all SmartTouchTable series products from database
    const products = await prisma.smartTouchTable.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} SmartTouchTable series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} SmartTouchTable series products`
    })

  } catch (error) {
    console.error('❌ Error fetching SmartTouchTable series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch SmartTouchTable series data from database'
      },
      { status: 500 }
    )
  }
} 