import React from 'react'

export function getSearchUrl(searchValue: string): string {
  return `/?search=${searchValue}`
}
