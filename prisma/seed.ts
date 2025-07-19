import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

/**
 * Seed script to populate the InteractiveDisplayIFP50 table with sample data
 * Run with: npx tsx prisma/seed.ts
 */
async function main() {
  console.log('🌱 Starting database seeding...')

  // Sample IFP50 series products data
  const sampleIFP50Products = [
    {
      title: "IFP50-55 Interactive Display",
      description: "55-inch 4K Ultra HD interactive display with advanced touch technology, perfect for modern classrooms and boardrooms. Features built-in Android system, wireless connectivity, and crystal-clear visuals for immersive presentations.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP50-65 Professional Series",
      description: "65-inch professional-grade interactive display designed for large conference rooms and auditoriums. Boasts exceptional brightness, wide viewing angles, and enterprise-level security features for corporate environments.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP50-75 Education Edition",
      description: "75-inch education-focused interactive display with specialized software for K-12 classrooms. Includes collaborative tools, lesson planning features, and student engagement analytics to enhance learning outcomes.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP50-86 Ultra Large Format",
      description: "86-inch ultra-large format interactive display for premium installations. Perfect for museums, exhibition halls, and high-end corporate lobbies. Features stunning visual clarity and seamless integration capabilities.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP50-98 Exhibition Series",
      description: "98-inch exhibition-grade interactive display with museum-quality visuals and touch precision. Designed for public spaces, trade shows, and interactive exhibits. Includes advanced content management and remote monitoring.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
    }
  ]

  // Sample IFP51 series products data
  const sampleIFP51Products = [
    {
      title: "IFP51-65 Enterprise Display",
      description: "65-inch 8K Ultra HD enterprise-grade interactive display with advanced AI capabilities and biometric security. Perfect for high-security corporate environments and executive boardrooms requiring the highest level of performance and security.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP51-75 Professional Series",
      description: "75-inch professional 8K interactive display with 5G connectivity and enterprise management features. Designed for large-scale corporate deployments with centralized management and advanced security protocols.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP51-86 Ultra Premium",
      description: "86-inch ultra-premium 8K interactive display with cutting-edge AI features and advanced collaboration tools. Perfect for innovation labs, research centers, and high-end corporate environments demanding the latest technology.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP51-98 Executive Edition",
      description: "98-inch executive-grade 8K interactive display with enterprise security and advanced analytics. Designed for C-suite environments, command centers, and high-security facilities requiring the ultimate in display technology.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP51-110 Command Center",
      description: "110-inch command center 8K interactive display with military-grade security and real-time analytics. Perfect for emergency response centers, military installations, and critical infrastructure monitoring facilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
    }
  ]

  // Sample IFP52 series products data
  const sampleIFP52Products = [
    {
      title: "IFP52-75 Executive Premium",
      description: "75-inch 10K Ultra HD executive-grade interactive display with quantum touch technology and military-grade security. Perfect for C-suite environments, government facilities, and high-security corporate headquarters requiring the ultimate in display technology.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP52-86 Quantum Elite",
      description: "86-inch quantum-powered 10K interactive display with 6G connectivity and quantum AI features. Designed for innovation centers, research laboratories, and cutting-edge corporate environments demanding the latest quantum technology.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP52-98 Presidential Suite",
      description: "98-inch presidential-grade 10K interactive display with quantum encryption and biometric authentication. Perfect for government headquarters, military command centers, and ultra-secure corporate environments.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP52-110 Quantum Command",
      description: "110-inch quantum command center 10K interactive display with real-time quantum analytics and predictive AI. Designed for national security facilities, emergency response centers, and critical infrastructure monitoring.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP52-130 Future Vision",
      description: "130-inch future-vision 10K interactive display with quantum computing integration and holographic projection capabilities. Perfect for innovation hubs, research institutions, and next-generation corporate environments.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
    }
  ]

  // Sample IFP62 series products data - Premium Executive Series
  const sampleIFP62Products = [
    {
      title: "IFP62-85 Executive Elite",
      description: "85-inch 12K Ultra HD executive-grade interactive display with neural network AI and quantum encryption. Perfect for Fortune 500 boardrooms, government headquarters, and ultra-secure corporate environments requiring the pinnacle of display technology.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP62-98 Presidential Elite",
      description: "98-inch presidential-grade 12K interactive display with advanced neural AI and military-grade security protocols. Designed for presidential offices, national security facilities, and ultra-high-security corporate headquarters.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP62-110 Quantum Supreme",
      description: "110-inch quantum-powered 12K interactive display with neural network integration and quantum computing capabilities. Perfect for advanced research facilities, innovation hubs, and cutting-edge corporate environments.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP62-130 Future Elite",
      description: "130-inch future-elite 12K interactive display with holographic projection and neural AI analytics. Designed for next-generation corporate environments, research institutions, and innovation centers.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "IFP62-150 Vision Elite",
      description: "150-inch vision-elite 12K interactive display with quantum neural networks and holographic interfaces. Perfect for advanced research laboratories, innovation hubs, and next-generation corporate environments.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center"
    }
  ]

  // Clear existing data
  console.log('🗑️ Clearing existing data...')
  await prisma.interactiveDisplayIFP50.deleteMany()
  await prisma.interactiveDisplayIFP51.deleteMany()
  await prisma.interactiveDisplayIFP52.deleteMany()
  await prisma.interactiveDisplayIFP62.deleteMany()

  // Insert IFP50 sample data
  console.log('📝 Inserting IFP50 sample products...')
  for (const product of sampleIFP50Products) {
    await prisma.interactiveDisplayIFP50.create({
      data: product
    })
  }

  // Insert IFP51 sample data
  console.log('📝 Inserting IFP51 sample products...')
  for (const product of sampleIFP51Products) {
    await prisma.interactiveDisplayIFP51.create({
      data: product
    })
  }

  // Insert IFP52 sample data
  console.log('📝 Inserting IFP52 sample products...')
  for (const product of sampleIFP52Products) {
    await prisma.interactiveDisplayIFP52.create({
      data: product
    })
  }

  // Insert IFP62 sample data
  console.log('📝 Inserting IFP62 sample products...')
  for (const product of sampleIFP62Products) {
    await prisma.interactiveDisplayIFP62.create({
      data: product
    })
  }

  console.log('✅ Database seeding completed successfully!')
  console.log(`📊 Created ${sampleIFP50Products.length} IFP50 series products`)
  console.log(`📊 Created ${sampleIFP51Products.length} IFP51 series products`)
  console.log(`📊 Created ${sampleIFP52Products.length} IFP52 series products`)
  console.log(`📊 Created ${sampleIFP62Products.length} IFP62 series products`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 