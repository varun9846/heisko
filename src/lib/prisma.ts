import { PrismaClient } from '../generated/prisma'

// Global variable to store the Prisma client instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Create a singleton Prisma client instance
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// In development, set the global instance to avoid multiple connections
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 