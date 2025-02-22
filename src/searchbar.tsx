import React from 'react';
import { Properties } from 'csstype';

interface MyComponentProps {
}

const SearchBar: React.FC<MyComponentProps> = () => {
  const parentStyles: Properties = {
    display: 'block',
    position: 'relative',
    width: '299.57px',
    height: '48px',
    margin: '0px',
    padding: '0px',
    border: '0px none rgb(25, 30, 59)',
    borderRadius: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    gap: 'normal',
    zIndex: 'auto',
  };
  const labelStyles: Properties = {
    color: 'rgb(25, 30, 59)',
    fontFamily: '"Centra No2", -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '12px',
    fontWeight: '700',
    padding: '0px',
    display: 'block',
    position: 'absolute',
    top: '4px',
    left: '0px',
    right: '206.32px',
    bottom: '28px',
    margin: '0px 12px 0px 44px',
    zIndex: 'auto',
  };
  const inputStyles: Properties = {
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(129, 132, 148)',
    borderRadius: '8px',
    color: 'rgb(25, 30, 59)',
    fontFamily: '"Centra No2", -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    padding: '16px 11px 0px 43px',
    display: 'none',
    width: '100%',
    height: 'auto',
    boxShadow: 'none',
    position: 'static',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    margin: '0px',
    outline: 'rgb(25, 30, 59) none 0px',
    zIndex: 'auto',
  };
  const buttonStyles: Properties = {
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid rgb(129, 132, 148)',
    borderRadius: '8px',
    color: 'rgb(25, 30, 59)',
    fontFamily: '"Centra No2", -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    padding: '16px 11px 0px 43px',
    cursor: 'pointer',
    display: 'block',
    width: '299.57px',
    height: '48px',
    boxShadow: 'none',
    textAlign: 'start',
    textDecoration: 'none solid rgb(25, 30, 59)',
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: '20px',
    position: 'static',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    margin: '0px',
    outline: 'rgb(25, 30, 59) none 0px',
    opacity: '1',
    pointerEvents: 'auto',
    transition: 'all',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    zIndex: 'auto',
  };
  const iconStyles: Properties = {
    fill: 'rgb(25, 30, 59)',
    width: '20px',
    height: '20px',
    display: 'block',
    position: 'absolute',
    top: '24px',
    left: '12px',
    right: '267.57px',
    bottom: '4px',
    margin: '0px',
    zIndex: 'auto',
  };
  const buttonText = "7 mars - 8 mars";
  const labelContent = "Datum";
  const inputPlaceholder = "Placeholder";
  const iconContent = "<svg class=\"uitk-icon uitk-field-icon\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path fill-rule=\"evenodd\" d=\"M19 4h-1V3a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H8V3a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H5a2 2 0 0 0-1.99 2L3 20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 16H6a1 1 0 0 1-1-1V9h14v10a1 1 0 0 1-1 1zM8 11h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z\" clip-rule=\"evenodd\"></path></svg>";

  return (
    <div style={parentStyles}>
      <label style={labelStyles}>{labelContent}</label>
      <input style={inputStyles} placeholder={inputPlaceholder} />
      <button style={buttonStyles}>{buttonText}</button>
      <div dangerouslySetInnerHTML={{ __html: iconContent }} style={iconStyles} />
    </div>
  );
};

export default SearchBar;