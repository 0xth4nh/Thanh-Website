// Blog post summaries for the listing page
export const blogPosts = [
  {
    id: 2,
    title: "college.xyz: the only platform students need to get onchain",
    excerpt:
      "A year after MBC inspired me, we built college.xyz — a discovery point for students entering web3. The next generation is hungry to learn, build, and contribute, and it's on us to build the infrastructure that supports them.",
    date: "2025-12-11",
    readTime: "4 min read",
    tags: ["student", "crypto"],
  },
  {
    id: 1,
    title: "0xthanh's personal guide into crypto as a student",
    excerpt:
      "I got into crypto through hackathons and internships—learning by building, breaking things, and reading docs at 2AM. It was chaotic, but that’s what made it exciting. This guide comprisies all helpful resources I found.",
    date: "2025-06-14",
    readTime: "10 min read",
    tags: ["student", "crypto"],
  },
];

// Full blog content
export const blogContent = {
  2: {
    title: "college.xyz: the only platform students need to get onchain",
    date: "2025-12-11",
    readTime: "4 min read",
    category: "Web3",
    content: `
    <p>This time last year, I was just a participant at <a href="https://x.com/MBC_Conference" target="_blank">@MBC_Conference</a>, bringing <a href="https://x.com/Blockchain_GT" target="_blank">@Blockchain_GT</a> members to hack, learn, and network with other university clubs. That weekend genuinely inspired me. It was the first blockchain conference built for students, and I met so many others who were just as excited about the space as I was — which honestly surprised me. I thought there would be way fewer of us.</p>

    <p>Earlier this year, <a href="https://x.com/Evanzsolomon" target="_blank">@Evanzsolomon</a> reached out and asked if I wanted to help build the <a href="https://x.com/college_xyz" target="_blank">@college_xyz</a> platform. I said yes immediately. Together with <a href="https://x.com/redempshawne" target="_blank">@redempshawne</a>, <a href="https://x.com/EzvenG" target="_blank">@EzvenG</a>, and many others, we built an incredible website that acts as a discovery point for students entering web3.</p>

    <p>Fast forward to last weekend: seeing hundreds of students from dozens of universities — both domestic and international — show up at MBC this year hacking, networking, and learning made one thing clear. We're actually doing something right. The next generation is hungry to learn, build, and contribute. And it's on us to create the infrastructure that supports them.</p>

    <h2>Our Role</h2>
    <p>Our original vision for college.xyz was simple: give students a clear, all-in-one starting point for web3. Not just onboarding, but a standard pathway — similar to LeetCode for SWE, Wall Street Oasis for IB, the green book for quants.</p>
    <p>Our role is to curate, connect, and guide — helping students understand what to learn, where to learn it, and how to translate that knowledge into real opportunities.</p>

    <h2>What's coming next?</h2>
    <p>We want college.xyz to evolve into a complete journey for students:</p>
    <ul>
        <li><strong>Education</strong> — curated learning paths (leveraging existing platforms such as <a href="https://x.com/CyfrinUpdraft" target="_blank">@CyfrinUpdraft</a>) for different career roles in blockchain: smart contract developers, analysts, researchers.</li>
        <li><strong>Bounties</strong> — more coordinated bounties (dev / research / ...) across the school year so students have a chance to compete with each other and improve their skills.</li>
        <li><strong>Career / Internship</strong> — continue to work with <a href="https://x.com/coinbase" target="_blank">@coinbase</a>, <a href="https://x.com/Gemini" target="_blank">@Gemini</a>, <a href="https://x.com/circle" target="_blank">@circle</a>, and happy to welcome more web3 companies to bring new talent into the industry. (Both bounty and jobs listings on college.xyz will be reworked to make the listing side easier.)</li>
        <li><strong>Alumni</strong> — a lot of students attending MBC last year and this year got hired into the industry, and we hope to work closely with them to share their experience and mentor the next generation.</li>
    </ul>

    <p>Breaking into web3 should be simple for students: <strong>learn → build → get hired</strong>. With college.xyz, blockchain and crypto should no longer feel like a black box students are afraid to explore.</p>

    <p>Eventually, our team wants the platform to run automatically — with enough structure and incentive to grow independently and sustainably.</p>

    <h2>And...</h2>
    <p>I'm excited to keep building and to work with more people who believe in this mission. See you at UBC 2026!</p>
    `,
  },
  1: {
    title: "0xthanh's personal guide into crypto as a student",
    date: "2025-06-14",
    readTime: "10 min read",
    category: "Blockchain",
    content: `
    <p>Getting started in crypto can feel overwhelming, but the right resources can make all the difference. Below is a curated list of beginner-to-advanced materials to help you build a strong foundation in Bitcoin, Ethereum, smart contracts, DeFi, and beyond.</p>

    <h2>Core Reading</h2>
    <ul>
        <li><strong>Bitcoin (Princeton Book)</strong> – In-depth look at Bitcoin's technical foundations: 
        <a href="https://d28rh4a8wq0iu5.cloudfront.net/bitcointech/readings/princeton_bitcoin_book.pdf" target="_blank">Read here</a>
        </li>
        <li><strong>Ethereum Learning Hub</strong> – BEST WIKI on how Ethereum works from the documents:
        <a href="https://ethereum.org/en/learn/" target="_blank">ethereum.org/learn</a>
        </li>
        <li><strong>Speedrun Ethereum</strong> – SPEEDRUN ETHEREUM:
        <a href="https://speedrunethereum.com/" target="_blank">speedrunethereum.com</a>
        </li>
        <li><strong>0xmons Ethereum Deep Dive</strong> – A recent community guide on Ethereum:
        <a href="https://x.com/0xmons/status/1932468078438490321?s=46" target="_blank">View thread</a>
        </li>
    </ul>

    <h2>Smart Contract & DeFi Tutorials</h2>
    <ul>
        <li><strong>Cyfrin Updraft</strong> – Learn smart contract development and real-world DeFi integrations: 
        <a href="https://www.cyfrin.io/updraft" target="_blank">Start here</a>
        </li>
        <li><strong>CryptoZombies</strong> – A fun way to learn Solidity by building a zombie game:
        <a href="https://cryptozombies.io" target="_blank">cryptozombies.io</a>
        </li>
        <li><strong>DeFi Protocol Deep Dives</strong> – Understand how these core protocols work:
        <ul>
            <li>Uniswap v2/v3/v4 – DEX with AMM model</li> (Check out uniswap websites or Atrium Academy for Uniswap v4)
            <li>Curve – Stablecoin-focused AMM</li>
            <li>Balancer – Generalized AMM with customizable pools</li>
        </ul>
        <li>Some famous ERCs standards to read into (check out from OpenZeppelin / Solady):
        <ul>
            <li>ERC20 – Standard for fungible tokens</li>
            <li>ERC721 – Standard for non-fungible tokens</li>
            <li>ERC1155 – Standard for multiple token types</li>
            <li>ERC4626 – Standard for tokenized vaults</li>
        </ul>
        </li>
    </ul>

    <h2>Important Topics / Projects to Explore</h2>
    <ul>
        <li><strong>Lido</strong> – Liquid staking protocol (stETH)</li>
        <li><strong>Circles and Stablecoins</strong> - How they work and how they are used</li>
        <li><strong>Aave</strong> – Decentralized lending/borrowing platform</li>
        <li><strong>Pendle</strong> – Yield trading and fixed income DeFi</li>
        <li><strong>EigenLayer</strong> – Restaking protocol enabling AVS (Actively Validated Services)</li>
        <li><strong>Chainlink</strong> – Oracle and randomness infrastructure (incl. CCIP)</li>
        <li><strong>Across</strong> – Secure and efficient cross-chain bridging</li>
        <li><strong>Layer 2s</strong> – Compare Optimistic Rollups (e.g., OP) vs ZK-Rollups</li>
        <li><strong>Virtuals</strong> - Platform to launch AI agents</li>
        <li><strong>Polymarket</strong> - Platform to launch prediction markets</li>
    </ul>
    <h2>Advanced Topics</h2>
    <ul>
        <li><strong>Zero-Knowledge Proofs (ZK)</strong> – Privacy-preserving proofs like zk-SNARKs & zk-STARKs</li>
        <li><strong>Assembly script and Gas optimization</strong> – Learn how to write efficient smart contracts</li>
        <li><strong>Formal Verification</strong> – Proving smart contracts work as expected mathematically</li>
    </ul>

    <h2>Tips for Learning</h2>
    <ul>
        <li>Skim one core reading, then go hands-on via tutorial</li>
        <li>Explore one DeFi protocol by reading its docs and trying its UI with small amounts</li>
        <li>Join developer discords (e.g., Cyfrin, ETHGlobal, protocol-specific) to ask questions</li>
        <li>Follow crypto researchers and devs on Twitter/Farcaster</li>
    </ul>

    <p>Crypto is fast-moving—don’t rush it. Build intuition step-by-step, and use these resources as your map.</p>
    `,
  },
};
