import React from 'react';

interface PageWrapperProps {
    className?: string;
    containerClass?: string;
}

const PageWrapper: React.FC<React.PropsWithChildren<PageWrapperProps>> = ({
                                                                              children,
                                                                              className = '',
                                                                              containerClass = '',
                                                                          }) => {
    return (
        <div className={`min-h-screen bg-gray-100 p-4 md:p-8 ${className}`}>
            <div className={`max-w-7xl mx-auto ${containerClass}`}>
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;
