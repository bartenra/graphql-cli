/* tslint:disable */

/**
 * AUTO-GENERATED FILE @ 2019-11-25 15:16:17 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c postgres://username:password@localhost:55432/users -t note -t comment -s public
 *
 */

export namespace noteFields {
    export type id = number;
    export type title = string | null;
    export type description = string | null;
    export type created_at = Date | null;
    export type updated_at = Date | null;

}

export interface note {
    id: noteFields.id;
    title: noteFields.title;
    description: noteFields.description;
    created_at: noteFields.created_at;
    updated_at: noteFields.updated_at;

}

export namespace commentFields {
    export type id = number;
    export type title = string | null;
    export type description = string | null;
    export type created_at = Date | null;
    export type updated_at = Date | null;
    export type noteId = number | null;

}

export interface comment {
    id: commentFields.id;
    title: commentFields.title;
    description: commentFields.description;
    created_at: commentFields.created_at;
    updated_at: commentFields.updated_at;
    noteId: commentFields.noteId;

}