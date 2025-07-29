import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { SmartBlackboardM86LBResponse, SmartBlackboardM86LBError } from '@/lib/types'

/**
 * GET /api/smart-solutions/smart-blackboard-m86lb
 * Fetches all SmartBlackboardM86LB series smart blackboard products from the database
 * Returns a structured response with success status and data
 * 
 * SmartBlackboardM86LB series features:
 * - Advanced smart blackboard technology
 * - Enhanced touch capabilities for educational environments
 * - Educational software integration
 * - Collaborative learning features
 * - Smart connectivity solutions
 */
export async function GET(request: NextRequest): Promise<NextResponse<SmartBlackboardM86LBResponse | SmartBlackboardM86LBError>> {
  try {
    // Fetch all SmartBlackboardM86LB series products from database
    const products = await prisma.smartBlackboardM86LB.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} SmartBlackboardM86LB series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} SmartBlackboardM86LB series products`
    })

  } catch (error) {
    console.error('❌ Error fetching SmartBlackboardM86LB series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch SmartBlackboardM86LB series data from database'
      },
      { status: 500 }
    )
  }
} 