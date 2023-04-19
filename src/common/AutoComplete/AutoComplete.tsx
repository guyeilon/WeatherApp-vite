import Input, { InputProps } from 'common/Input';
import { AnimatePresence, motion } from 'framer-motion';
import { useDebounce } from 'hooks';
import React from 'react';
import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';
import breakpoints from 'styles/theme/breakpoints';
import { useMediaQuery } from 'usehooks-ts';

interface AutoCompleteProps<T> extends InputProps {
  options: T[];
  emptyState: JSX.Element;
  renderOption: (option: T) => React.ReactNode;
  onInputChange: (value: string) => void;
  isLoading?: boolean;
  searchTerm: string;
}

const animationVariants = {
  hidden: { x: '-50%', y: -36, opacity: 0, transition: { duration: 0.1 } },
  visible: { x: '-50%', y: 0, opacity: 1, transition: { type: 'spring', damping: 30, stiffness: 300 } },
};

const AutoComplete = <T extends unknown>({
  options,
  emptyState,
  renderOption,
  icon,
  variant,
  onInputChange,
  isLoading,
  searchTerm,
  ...rest
}: AutoCompleteProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value);
  const debouncedValue = useDebounce(handleChange, 300);

  const isDisplay = !!searchTerm;
  const isMobile = useMediaQuery(breakpoints.max.mobile);

  return (
    <AutoCompleteWrapper>
      <Input icon={icon} variant={variant} type="text" onChange={debouncedValue} {...rest} />
      {isDisplay && (
        <AnimatePresence>
          <OptionsContainer
            as={motion.div}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animationVariants}
          >
            {(() => {
              if (isLoading)
                return (
                  <LoaderWrapper>
                    <Bars
                      height="80"
                      width="80"
                      color="#0f0f0ef0"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible
                    />
                  </LoaderWrapper>
                );
              if (options.length > 0) {
                return <StyledOptions>{options.map(option => renderOption(option))}</StyledOptions>;
              }
              if (options.length === 0) {
                return emptyState;
              }
              return null;
            })()}
          </OptionsContainer>
        </AnimatePresence>
      )}
      {!isDisplay && isMobile && emptyState}
    </AutoCompleteWrapper>
  );
};

export default AutoComplete;

export const AutoCompleteWrapper = styled.div.attrs({ className: 'app-AutoCompleteWrapper' })`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;
const OptionsContainer = styled.div.attrs({ className: 'app-options-display' })`
  width: 476px;
  height: 372px;
  background-color: ${({ theme }) => theme.colors.palette.white};
  border-radius: 30px;
  box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.16);
  position: absolute;
  top: calc(54px + 24px);
  left: 50%;
  transform: translateX(-50%);
`;

const StyledOptions = styled.ul.attrs({ className: 'search-results-options' })`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: calc(100% - 48px);
  overflow: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: inherit;
  }
  ::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 100px;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  @media ${({ theme }) => theme.breakpoints.max.mobile} {
    top: 120px;
  }
`;
