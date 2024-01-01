export interface PublicProfileLinkType {
  github: string;
  linkedIn: string;
}

export interface ContactType {
  contactInfo: {
    title: string;
    summary: string;
    phoneNumber: string;
    email: string;
    link: PublicProfileLinkType;
  };
}
