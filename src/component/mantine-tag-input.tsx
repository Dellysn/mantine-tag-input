import {
  Badge,
  BadgeProps,
  Box,
  CloseButton,
  CloseButtonProps,
  Group,
  Input,
  Text,
} from '@mantine/core'
import React, { useEffect, useState } from 'react'

import { useTagStyles } from '.'
export interface TagsInputProps {
  name?: string
  placeHolder?: string
  value?: string[]
  error?: string
  onChange?: (tags: string[]) => void
  onBlur?: any
  separators?: string[]
  disableBackspaceRemove?: boolean
  onExisting?: (tag: string) => void
  onRemoved?: (tag: string) => void
  disabled?: boolean
  isEditOnRemove?: boolean
  beforeAddValidate?: (tag: string, existingTags: string[]) => boolean
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  badgeProps?: BadgeProps
  closeButtonProps?: CloseButtonProps
}

export const TagInput = (props: TagsInputProps) => {
  const [tags, setTags] = useState<string[]>(props.value ?? [])
  const { classes } = useTagStyles({
    error: props?.error === undefined ? false : true,
  })
  const { disabled, size, error } = props

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation()
    const text = e.currentTarget.value
    const seperators = props?.separators ?? [',', ';', '|', '/', '\\']
    if (e.key === 'Enter') {
      const tag = e.currentTarget.value
      if (tag) {
        if (props.beforeAddValidate) {
          if (props.beforeAddValidate(tag, tags)) {
            setTags([...tags, tag])
            props?.onChange?.([...tags, tag])
          }
        } else {
          setTags([...tags, tag])
          props?.onChange?.([...tags, tag])
        }
        e.currentTarget.value = ''
      }
    }

    if (!text && !props.disableBackspaceRemove && tags.length > 0 && e.key === 'Backspace') {
      e.currentTarget.value = props.isEditOnRemove ? `${tags[tags.length - 1]}` : ''
      setTags(tags.slice(0, tags.length - 1))
    }

    if (text && seperators.includes(e.key)) {
      const tag = text.slice(0, text.length - 1)
      if (tag) {
        if (props.beforeAddValidate) {
          if (props.beforeAddValidate(tag, tags)) {
            setTags([...tags, tag])
            props?.onChange?.([...tags, tag])
          }
        } else {
          setTags([...tags, tag])
          props?.onChange?.([...tags, tag])
        }
        e.currentTarget.value = ''
      }
    }

    props?.onKeyUp?.(e)
  }
  useEffect(() => {
    props?.onBlur?.(tags)
    props?.onChange?.(tags)
  }, [tags])

  return (
    <Input.Wrapper error={error} className={classes.tagsWrapper}>
      <Box className="tags-input--wrapper">
        <Group spacing={5}>
          {tags.map((tag) => (
            <Badge key={tag} size={size} variant="dot" {...props?.badgeProps}>
              <Group position="apart">
                <Text>{tag}</Text>
                <CloseButton
                  onClick={() => {
                    setTags(tags.filter((t) => t !== tag))
                    props?.onRemoved?.(tag)
                  }}
                  className="tags-input--close-button"
                  {...props?.closeButtonProps}
                />
              </Group>
            </Badge>
          ))}
        </Group>
        <Input
          disabled={disabled}
          onKeyUp={handleKeyUp}
          placeholder={props?.placeHolder}
          size={size}
        />
      </Box>
    </Input.Wrapper>
  )
}
