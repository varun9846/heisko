import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { IFPDADV100Response, IFPDADV100Error } from '@/lib/types'

/**
 * GET /api/ifpd/adv100
 * Fetches all IFPDADV100 series interactive display products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<IFPDADV100Response | IFPDADV100Error>> {
  try {
    // Fetch all IFPDADV100 series products from database
    const products = await prisma.iFPDADV100.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })


    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} IFPDADV100 series products`
    })

  } catch (error) {
    console.error('❌ Error fetching IFPDADV100 series data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch IFPDADV100 series data from database'
      },
      { status: 500 }
    )
  }
} 