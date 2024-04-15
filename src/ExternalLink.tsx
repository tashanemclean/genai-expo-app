import { Link } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export function ExternalLink(props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string }) {
  return (
    <Link
      target="_blank"
      {...props}
      // @ts-expect-error: External URLs are not typed.
      href={props.href}
    />
  );
}
