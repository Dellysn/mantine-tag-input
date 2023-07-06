import { createStyles, rem } from '@mantine/core'

type StyleInput = {
  minRows?: number
  maxRows?: number
}

const useTagStyles = createStyles((theme, styleParams: StyleInput) => {
  const maxRow = styleParams?.maxRows
  const minRow = styleParams?.minRows

  return {
    tags_wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      minWidth: '100%',
      minHeight: rem(minRow ?? 30),
      maxHeight: rem(maxRow ?? 100),
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

    tag_input_group: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    tag_remove_button: {
      // marginLeft: rem(4),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      backgroundColor: 'transparent',
      border: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }
})

export default useTagStyles
