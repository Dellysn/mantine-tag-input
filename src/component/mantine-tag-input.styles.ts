import { createStyles, rem } from '@mantine/core'
import { ReactNode } from 'react'

export const useTagStyles = createStyles(
  (
    theme,
    {
      error,
    }: {
      error?: ReactNode
    },
  ) => {
    return {
      tagsWrapper: {
        width: '100%',
        maxWidth: '100%',
        '.mantine-Input-wrapper': {
          width: '100%',
        },
        '.tags-input--wrapper': {
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          minWidth: '100%',
          border: `${rem(1)} solid ${theme.primaryColor}`,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          transition: 'border-color 100ms ease',
          '&:focus, &:focus-within': theme.focusRingStyles.inputStyles(theme),
          borderRadius: rem(4),
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          outline: 0,
          padding: `${rem(4)} ${rem(8)}`,
          '&:disabled': {
            backgroundColor: 'transparent',
            '&:focus, &:focus-within': {
              outline: 'none',
              borderColor: 'transparent',
            },
          },

          input: {
            border: 'none',
            width: '100%',
            display: 'inline-block',
            margin: 0,
            outline: 0,
            padding: 0,
          },
        },
        '.tags-input--close-button': {
          display: 'flex',
          background: 'transparent',
          border: 'none',
          outline: 0,
          padding: 0,

          '&:hover': {
            background: 'transparent',
          },
          '&:focus': {
            background: 'transparent',
          },
          '&:active': {
            background: 'transparent',
            transform: 'none',
          },
        },
      },
    }
  },
)
