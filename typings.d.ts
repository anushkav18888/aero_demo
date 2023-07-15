// typing.d.ts

export interface Post {
    _id: string;
    publishedAt: string; // Date in a specific format (e.g., ISO 8601 format)
    title: string;
    author: {
      name: string;
      image: string;
      linkedin?: string; // Make the 'linkedin' field optional
    };
    comments: Comment[];
    description: string;
    mainImage: {
      asset: {
        url: string;
      };
    };
    slug: {
      current: string;
    };
    body: object[]; // Update the type for 'body' if necessary
    category: string;
  }
  
  export interface Comment {
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
      _ref: string;
      _type: string;
    };
    publishedAt: string; // Date in a specific format (e.g., ISO 8601 format)
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  }
  