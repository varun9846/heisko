import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFPDT982Response, IFPDT982Error } from '@/lib/types'

/**
 * GET /api/ifpd/t982
 * Fetches all IFPDT982 series interactive display products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFPDT982Response | IFPDT982Error>> {
  try {
    // Fetch all IFPDT982 series products from database
    const products = await prisma.iFPDT982.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    console.log(`✅ Successfully fetched ${products.length} IFPDT982 series products`)

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFPDT982 series products`
    })

  } catch (error) {
    console.error('❌ Error fetching IFPDT982 series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFPDT982 series data from database'
      },
      { status: 500 }
    )
  }
} 