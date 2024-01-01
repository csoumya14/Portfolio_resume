export interface EducationType {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface WorkType {
  company: string;
  link: string;
  title: string;
  start: string;
  end: string;
  description: string;
}

export interface ResumeType {
  resume: {
    name: string;
    address: string;
    introduction: string;
    profileImage: string;
    introductionImage: string;
    summary: string;
    education: EducationType[];
    work: WorkType[];
    skills: string[];
  };
}
