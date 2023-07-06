import { Badge, CloseButton, Group, Input, Text } from '@mantine/core'
import React, { useState } from 'react'
import { useTagStyles } from '.'
import { InputProps } from '@mantine/core'
export interface TagsInputProps extends Omit<InputProps, 'onChange' | 'value'> {
  name?: string
  placeHolder?: string
  value?: string[]
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
  maxRows?: number
  minRows?: number
}

const MantineTagInput = (props: TagsInputProps) => {
  const [tags, setTags] = useState<string[]>(props.value ?? [])
  const { classes } = useTagStyles({
    maxRows: props.maxRows,
    minRows: props.minRows,
  })
  const { disabled } = props

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
  return (
    <Input.Wrapper className={classes.tags_wrapper}>
      <Group spacing={5}>
        {tags.map((tag) => (
          <Badge key={tag}>
            <Group position="apart">
              <Text>{tag}</Text>
              <CloseButton
                onClick={() => {
                  setTags(tags.filter((t) => t !== tag))
                  props?.onRemoved?.(tag)
                }}
                className={classes.tag_remove_button}
              />
            </Group>
          </Badge>
        ))}
      </Group>
      <Input disabled={disabled} onKeyUp={handleKeyUp} placeholder={props?.placeHolder} />
    </Input.Wrapper>
  )
}

export default MantineTagInput
