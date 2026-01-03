export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      blog_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_name: string | null
          canonical_url: string | null
          category_id: string | null
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          featured_image_alt: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          og_image: string | null
          published_at: string | null
          slug: string
          status: Database["public"]["Enums"]["post_status"] | null
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_name?: string | null
          canonical_url?: string | null
          category_id?: string | null
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          featured_image_alt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          og_image?: string | null
          published_at?: string | null
          slug: string
          status?: Database["public"]["Enums"]["post_status"] | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_name?: string | null
          canonical_url?: string | null
          category_id?: string | null
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          featured_image_alt?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          og_image?: string | null
          published_at?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["post_status"] | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      media: {
        Row: {
          alt_text: string | null
          bucket: string
          caption: string | null
          created_at: string | null
          file_size: number | null
          filename: string
          height: number | null
          id: string
          mime_type: string | null
          public_url: string | null
          storage_path: string
          width: number | null
        }
        Insert: {
          alt_text?: string | null
          bucket?: string
          caption?: string | null
          created_at?: string | null
          file_size?: number | null
          filename: string
          height?: number | null
          id?: string
          mime_type?: string | null
          public_url?: string | null
          storage_path: string
          width?: number | null
        }
        Update: {
          alt_text?: string | null
          bucket?: string
          caption?: string | null
          created_at?: string | null
          file_size?: number | null
          filename?: string
          height?: number | null
          id?: string
          mime_type?: string | null
          public_url?: string | null
          storage_path?: string
          width?: number | null
        }
        Relationships: []
      }
      source_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      source_passages: {
        Row: {
          context: string | null
          created_at: string | null
          fragment_url: string | null
          id: string
          page_number: string | null
          quote_text: string
          section: string | null
          sort_order: number | null
          source_id: string
          updated_at: string | null
          usage_hint: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          fragment_url?: string | null
          id?: string
          page_number?: string | null
          quote_text: string
          section?: string | null
          sort_order?: number | null
          source_id: string
          updated_at?: string | null
          usage_hint?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          fragment_url?: string | null
          id?: string
          page_number?: string | null
          quote_text?: string
          section?: string | null
          sort_order?: number | null
          source_id?: string
          updated_at?: string | null
          usage_hint?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "source_passages_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "source_passages_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources_with_category"
            referencedColumns: ["id"]
          },
        ]
      }
      sources: {
        Row: {
          author: string | null
          category_id: string | null
          created_at: string | null
          description: string | null
          doi: string | null
          full_citation: string | null
          id: string
          is_featured: boolean | null
          pdf_url: string | null
          publication: string | null
          short_title: string | null
          slug: string
          sort_order: number | null
          source_type: Database["public"]["Enums"]["source_type"] | null
          title: string
          updated_at: string | null
          url: string | null
          year: number | null
        }
        Insert: {
          author?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          doi?: string | null
          full_citation?: string | null
          id?: string
          is_featured?: boolean | null
          pdf_url?: string | null
          publication?: string | null
          short_title?: string | null
          slug: string
          sort_order?: number | null
          source_type?: Database["public"]["Enums"]["source_type"] | null
          title: string
          updated_at?: string | null
          url?: string | null
          year?: number | null
        }
        Update: {
          author?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          doi?: string | null
          full_citation?: string | null
          id?: string
          is_featured?: boolean | null
          pdf_url?: string | null
          publication?: string | null
          short_title?: string | null
          slug?: string
          sort_order?: number | null
          source_type?: Database["public"]["Enums"]["source_type"] | null
          title?: string
          updated_at?: string | null
          url?: string | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sources_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "source_categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      published_blog_posts: {
        Row: {
          author_name: string | null
          canonical_url: string | null
          category_id: string | null
          category_name: string | null
          category_slug: string | null
          content: string | null
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          featured_image_alt: string | null
          id: string | null
          meta_description: string | null
          meta_title: string | null
          og_image: string | null
          published_at: string | null
          slug: string | null
          status: Database["public"]["Enums"]["post_status"] | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      sources_with_category: {
        Row: {
          author: string | null
          category_id: string | null
          category_name: string | null
          category_slug: string | null
          category_sort_order: number | null
          created_at: string | null
          description: string | null
          doi: string | null
          full_citation: string | null
          id: string | null
          is_featured: boolean | null
          pdf_url: string | null
          publication: string | null
          short_title: string | null
          slug: string | null
          sort_order: number | null
          source_type: Database["public"]["Enums"]["source_type"] | null
          title: string | null
          updated_at: string | null
          url: string | null
          year: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sources_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "source_categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      post_status: "draft" | "published" | "archived"
      source_type:
        | "peer_reviewed"
        | "agency"
        | "advocacy"
        | "news"
        | "legal"
        | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      post_status: ["draft", "published", "archived"],
      source_type: [
        "peer_reviewed",
        "agency",
        "advocacy",
        "news",
        "legal",
        "other",
      ],
    },
  },
} as const
