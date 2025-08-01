import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { SmartTVLTSResponse, SmartTVLTSError } from '@/lib/types'

/**
 * GET /api/smart-solutions/smart-tv-lts
 * Fetches all SmartTVLTS series smart TV products from the database
 * Returns a structured response with success status and data
 * 
 * SmartTVLTS series features:
 * - Advanced smart TV technology with LTS support
 * - Long Term Support (LTS) with extended software updates
 * - 4K Ultra HD display quality for entertainment and business
 * - Smart connectivity solutions for modern environments
 * - Entertainment and business application integration
 */
export async function GET(request: NextRequest): Promise<NextResponse<SmartTVLTSResponse | SmartTVLTSError>> {
  try {
    // Fetch all SmartTVLTS series products from database
    const products = await prisma.smartTVLTS.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} SmartTVLTS series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} SmartTVLTS series products`
    })

  } catch (error) {
    console.error('❌ Error fetching SmartTVLTS series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch SmartTVLTS series data from database'
      },
      { status: 500 }
    )
  }
} 