import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { AMeetingPodResponse, AMeetingPodError } from '@/lib/types'

/**
 * GET /api/accessories/meeting-pod
 * Fetches all AMeetingPod series products from the database
 * Returns a structured response with success status and data
 */
export async function GET(request: NextRequest): Promise<NextResponse<AMeetingPodResponse | AMeetingPodError>> {
  try {
    // Fetch all AMeetingPod series products from database
    const products = await prisma.aMeetingPod.findMany({
      orderBy: {
        createdAt: 'desc' // Show newest first
      }
    })

    // Return successful response with data
    return NextResponse.json({
      success: true,
      data: products,
      message: `Successfully fetched ${products.length} Meeting Pod products`
    })

  } catch (error) {
    console.error('❌ Error fetching Meeting Pod data:', error)
    
    // Return error response with proper error handling
    return NextResponse.json(
      {
        success: false,
        error: 'DatabaseError',
        message: 'Failed to fetch Meeting Pod data from database'
      },
      { status: 500 }
    )
  }
} 