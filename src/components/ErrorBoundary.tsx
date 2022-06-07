import React, { ErrorInfo, ReactNode } from 'react';
import Button from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasErrored: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(err: Error, info: ErrorInfo) {
    console.log(err);
  }

  render() {
    return (
      <div>
        {this.state.hasErrored ? (
          <div>
            <div className="h-[100vh] text-center px-5 flex flex-col justify-center items-center">
              <h4 className="mb-5">An Error Occured</h4>
              <Button variant="primary" onClick={() => window.location.reload()}>
                Refresh
              </Button>
            </div>
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
