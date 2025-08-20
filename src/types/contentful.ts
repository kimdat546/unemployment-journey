import type { Entry, EntryFieldTypes } from "contentful";

// Simple asset interface following Vercel pattern
export interface ContentfulAsset {
  fields: {
    title?: string;
    file: {
      url: string;
      fileName?: string;
      contentType?: string;
    };
  };
}

// Story content type skeleton
export type StoryEntrySkeleton = {
  contentTypeId: "story";
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    excerpt?: EntryFieldTypes.Text;
    featuredImage?: EntryFieldTypes.AssetLink;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    publishedDate: EntryFieldTypes.Date;
    author?: EntryFieldTypes.EntryLink<AuthorEntrySkeleton>;
  };
};

// Author content type skeleton
export type AuthorEntrySkeleton = {
  contentTypeId: "author";
  fields: {
    name?: EntryFieldTypes.Symbol;
    bio?: EntryFieldTypes.Text;
    avatar?: EntryFieldTypes.AssetLink;
  };
};

// Page content type skeleton
export type PageEntrySkeleton = {
  contentTypeId: "page";
  fields: {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
  };
};

// Resource content type skeleton
export type ResourceEntrySkeleton = {
  contentTypeId: "resource";
  fields: {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    url: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol;
  };
};

// Type aliases for convenience - using proper skeleton types
export type StoryEntry = Entry<StoryEntrySkeleton>;
export type AuthorEntry = Entry<AuthorEntrySkeleton>;
export type PageEntry = Entry<PageEntrySkeleton>;
export type ResourceEntry = Entry<ResourceEntrySkeleton>;
