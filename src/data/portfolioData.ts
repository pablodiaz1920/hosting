export interface ProjectItem {
    id: string;
    title: string;
    category: 'website' | 'uxui' | 'photography' | 'graphic';
    subtitle: string;
    imageSrc: string;
    type: 'iframe' | 'image';
    link?: string;
    tools?: string;
    previewBadge?: string;
}

export const portfolioProjects: ProjectItem[] = [
    {
        id: 'rizos-divinos',
        title: 'Rizos Divinos',
        category: 'website',
        subtitle: 'E-commerce',
        imageSrc: 'https://s0.wp.com/mshots/v1/https://rizosdivinos.com/?w=800&h=600',
        type: 'iframe',
        link: 'https://rizosdivinos.com/',
        tools: '<i class="fab fa-wordpress"></i> <i class="fab fa-elementor"></i>',
        previewBadge: 'Click for Live Preview'
    },
    {
        id: 'inklub-787',
        title: 'Inklub 787',
        category: 'website',
        subtitle: 'Landing page',
        imageSrc: 'https://s0.wp.com/mshots/v1/https://inklub787.com/?w=800&h=600',
        type: 'iframe',
        link: 'https://inklub787.com/',
        tools: '<i class="fab fa-wordpress"></i> <i class="fab fa-elementor"></i>',
        previewBadge: 'Click for Live Preview'
    },
    {
        id: 'popal-pr',
        title: 'Popal PR',
        category: 'website',
        subtitle: 'Business Website',
        imageSrc: 'https://s0.wp.com/mshots/v1/https://popalpr.com/?w=800&h=600',
        type: 'iframe',
        link: 'https://popalpr.com/',
        tools: '<i class="fab fa-wordpress"></i> <i class="fab fa-elementor"></i>',
        previewBadge: 'Click for Live Preview'
    },
    {
        id: 'study-and-learn',
        title: 'Study & Learn',
        category: 'website',
        subtitle: 'Educational Platform',
        imageSrc: 'https://s0.wp.com/mshots/v1/https://studyandlearnwithme.com/?w=800&h=600',
        type: 'iframe',
        link: 'https://studyandlearnwithme.com/',
        tools: '<i class="fab fa-wordpress"></i> <i class="fab fa-elementor"></i>',
        previewBadge: 'Click for Live Preview'
    },
    {
        id: 'banking-app',
        title: 'Banking App',
        category: 'uxui',
        subtitle: 'App Interface Design',
        imageSrc: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        type: 'image'
    },
    {
        id: 'urban-portrait',
        title: 'Urban Portrait',
        category: 'photography',
        subtitle: 'Photography',
        imageSrc: 'https://images.unsplash.com/photo-1554048612-387768052bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        type: 'image'
    },
    {
        id: 'brand-identity',
        title: 'Brand Identity',
        category: 'graphic',
        subtitle: 'Graphic Design',
        imageSrc: 'https://images.unsplash.com/photo-1626785774573-4b799314348d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        type: 'image'
    }
];
