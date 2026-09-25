export interface ExperienceItem {
    roleKey: string;
    company: string;
    companyKey?: string;
    dateKey: string;
    descKey: string;
    isPrimary?: boolean;
    alignRight?: boolean;
}

export interface EducationItem {
    dateLabel: string;
    titleKey: string;
    schoolName?: string;
    schoolKey?: string;
    descKey: string;
    honorKey?: string;
    iconClass: string;
}

export const experiences: ExperienceItem[] = [
    {
        roleKey: 'role_1',
        company: 'Caribe Media',
        dateKey: 'date_1',
        descKey: 'desc_1',
        isPrimary: true
    },
    {
        roleKey: 'role_2',
        company: 'Pablo Díaz Creative Studio',
        dateKey: 'date_2',
        descKey: 'desc_2',
        isPrimary: false,
        alignRight: true
    },
    {
        roleKey: 'role_3',
        company: 'Universidad Tecnológica de Santiago - UTESA',
        companyKey: 'company_utesa',
        dateKey: 'date_3',
        descKey: 'desc_3',
        isPrimary: false
    }
];

export const educationItems: EducationItem[] = [
    {
        dateLabel: 'SEP 2026',
        titleKey: 'edu_3_title',
        schoolName: 'HubSpot Academy',
        descKey: 'edu_3_desc',
        iconClass: 'fas fa-bullseye'
    },
    {
        dateLabel: 'MAR 2026',
        titleKey: 'edu_2_title',
        schoolKey: 'edu_2_school',
        descKey: 'edu_2_desc',
        iconClass: 'fas fa-code'
    },
    {
        dateLabel: 'APR 2023',
        titleKey: 'edu_1_title',
        schoolKey: 'edu_1_school',
        descKey: 'edu_1_desc',
        honorKey: 'edu_1_honor',
        iconClass: 'fas fa-university'
    },
    {
        dateLabel: 'JUN 2019',
        titleKey: 'edu_4_title',
        schoolName: 'Centro Educativo María Inmaculada',
        descKey: 'edu_4_desc',
        iconClass: 'fas fa-laptop-code'
    }
];
