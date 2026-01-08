declare module 'react-google-recaptcha' {
  import * as React from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    size?: 'compact' | 'normal' | 'invisible';
    theme?: 'light' | 'dark';
    type?: 'image' | 'audio';
    tabindex?: number;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}
}
