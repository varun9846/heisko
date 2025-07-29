import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { SmartLiftingTouchTableResponse, SmartLiftingTouchTableError } from '@/lib/types'

/**
 * GET /api/smart-solutions/smart-lifting-touch-table
 * Fetches all SmartLiftingTouchTable series lifting touch table products from the database
 * Returns a structured response with success status and data
 * 
 * SmartLiftingTouchTable series features:
 * - Advanced lifting touch table technology
 * - Motorized height adjustment system
 * - Multi-position flexibility for ergonomic use
 * - Touch table integration with lifting capabilities
 * - Smart connectivity solutions
 */
export async function GET(request: NextRequest): Promise<NextResponse<SmartLiftingTouchTableResponse | SmartLiftingTouchTableError>> {
  try {
    // Fetch all SmartLiftingTouchTable series products from database
    const products = await prisma.smartLiftingTouchTable.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} SmartLiftingTouchTable series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} SmartLiftingTouchTable series products`
    })

  } catch (error) {
    console.error('❌ Error fetching SmartLiftingTouchTable series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch SmartLiftingTouchTable series data from database'
      },
      { status: 500 }
    )
  }
} 