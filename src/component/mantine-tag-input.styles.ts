import { createStyles, rem } from '@mantine/core'

export const useTagStyles = createStyles((theme) => {
  return {
    tagsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      minWidth: '100%',
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
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
      },
    },

    tagRemoveButton: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      backgroundColor: 'transparent',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }
})
