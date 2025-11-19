import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router';
import { ViewWrapper } from '../../pages/styles';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // console.error for dev purposes
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  // POC error component - in production this should be adequately styled etc.
  render() {
    if (this.state.hasError) {
      return (
        <ViewWrapper>
          <Typography>Oops! Something went wrong</Typography>
          <Button component={Link} to='/' variant={'text'}>
            Go back
          </Button>
        </ViewWrapper>
      );
    }

    // If error does not exist - render children
    return this.props.children;
  }
}

export default ErrorBoundary;
