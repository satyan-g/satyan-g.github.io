// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "post-ai-for-the-manager-running-the-team",
        
          title: "AI for the Manager Running the Team",
        
        description: "Beyond coding: how AI and MCP workflows move the needle across sprint planning, stakeholder reporting, architecture reviews, and self-documentation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ai-for-engineering-managers/";
          
        },
      },{id: "post-the-aiops-playbook-because-39-it-works-39-isn-39-t-a-strategy",
        
          title: "The AIops Playbook: Because &#39;It Works&#39; Isn&#39;t a Strategy",
        
        description: "Six operational practices for AI workflows — token budgeting, model tiering, prompt versioning, eval pipelines, sunset planning, and token-level observability.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/aiops-playbook/";
          
        },
      },{id: "post-reviving-a-2015-fpga-board-with-claude-code",
        
          title: "Reviving a 2015 FPGA Board with Claude Code",
        
        description: "10 bare-metal FPGA projects in one session on a Zynq-7000 — debugging DMA, interrupts, and XADC with Claude Code as a hardware-literate partner.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/fpga-claude-code/";
          
        },
      },{id: "post-what-if-llms-don-39-t-need-to-reason",
        
          title: "What If LLMs Don&#39;t Need to Reason?",
        
        description: "A sketch of an architecture where LLMs translate intent and rank solutions — with external tools handling the actual reasoning.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/llm-translate-rank/";
          
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/satyag/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
