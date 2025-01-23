/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products/index'
import { Route as ProductsProductIdImport } from './routes/products/$productId'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  id: '/products/',
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  id: '/products/$productId',
  path: '/products/$productId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      id: '/products/$productId'
      path: '/products/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/products': typeof ProductsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/products': typeof ProductsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/products/': typeof ProductsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/products/$productId' | '/products'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/products/$productId' | '/products'
  id: '__root__' | '/' | '/about' | '/products/$productId' | '/products/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ProductsProductIdRoute: typeof ProductsProductIdRoute
  ProductsIndexRoute: typeof ProductsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ProductsProductIdRoute: ProductsProductIdRoute,
  ProductsIndexRoute: ProductsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/products/$productId",
        "/products/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/products/$productId": {
      "filePath": "products/$productId.tsx"
    },
    "/products/": {
      "filePath": "products/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
