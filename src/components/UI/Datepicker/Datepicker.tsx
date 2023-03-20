import { ArrowLeft, ArrowRight } from 'baseui/icon';
import { CalendarProps, StatefulCalendar, StatefulDatepickerProps } from 'baseui/datepicker';
import theme from '@themes/default';

const ButtonStyles = {
  width: '16px',
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  color: theme.colors.white,
  backgroundColor: theme.colors.black,
  transition: `background ${theme.transitions.fast}`,
  ':hover': {
    backgroundColor: theme.colors.purpleDark
  }
};

const Datepicker = (props: StatefulDatepickerProps<CalendarProps>) => {
  return (
    <StatefulCalendar
      {...props}
      overrides={{
        Root: {
          style: {
            fontFamily: 'inherit',
            color: theme.colors.black
          }
        },
        CalendarHeader: {
          style: {
            paddingTop: '10px',
            paddingLeft: '8px',
            paddingRight: '8px',
            backgroundColor: 'transparent',
            fontFamily: 'inherit'
          }
        },
        PrevButton: {
          style: { ...ButtonStyles, marginRight: 'auto' }
        },
        PrevButtonIcon: {
          component: ArrowLeft
        },
        NextButton: {
          style: { ...ButtonStyles, marginLeft: 'auto' }
        },
        NextButtonIcon: {
          component: ArrowRight
        },
        MonthYearSelectButton: {
          style: {
            position: 'relative',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '20px',
            height: '22px',
            paddingRight: '15px',
            paddingLeft: '8px',
            borderColor: theme.colors.grey,
            borderTopWidth: '1px',
            borderRightWidth: '1px',
            borderBottomWidth: '1px',
            borderLeftWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '4px',
            backgroundColor: theme.colors.purpleLight,
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            ':after': {
              content: '""',
              position: 'absolute',
              right: '6px',
              bottom: '4px',
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '0 0 7px 7px',
              borderColor: `transparent transparent ${theme.colors.black} transparent`
            }
          }
        },
        MonthYearSelectIconContainer: {
          component: () => null
        },
        MonthYearSelectPopover: {
          props: {
            overrides: {
              Body: {
                style: {
                  boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  ':after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '0 5.5px 6px 5.5px',
                    borderColor: `transparent transparent ${theme.colors.purpleLight} transparent`
                  }
                }
              },
              Inner: {
                style: {
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  border: `1px solid ${theme.colors.purpleLight}`,
                  overflow: 'hidden'
                }
              }
            }
          }
        },
        MonthYearSelectStatefulMenu: {
          props: {
            overrides: {
              ListItem: {
                style: {
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '16px'
                }
              }
            }
          }
        },
        MonthContainer: {
          style: {
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '8px',
            paddingRight: '8px'
          }
        },
        MonthHeader: {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          }
        },
        WeekdayHeader: {
          style: {
            width: '24px',
            height: '24px',
            lineHeight: '24px',
            marginLeft: '4px',
            marginRight: '4px',
            paddingLeft: '0',
            paddingRight: '0',
            paddingTop: '0',
            paddingBottom: '0',
            fontSize: '14px',
            fontWeight: '700',
            color: theme.colors.black,
            fontFamily: 'inherit'
          }
        },
        CalendarContainer: {
          style: {
            paddingTop: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            paddingRight: '0',
            display: 'block'
          }
        },
        Month: {
          style: {
            display: 'block'
          }
        },
        Week: {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          }
        },
        Day: {
          style: ({ $selected, $isHovered }) => ({
            width: '24px',
            height: '24px',
            lineHeight: '24px',
            marginLeft: '4px',
            marginRight: '4px',
            paddingLeft: '0',
            paddingRight: '0',
            paddingTop: '0',
            paddingBottom: '0',
            fontSize: '14px',
            fontFamily: 'inherit',
            color: theme.colors.black,
            ':after': {
              height: '100%',
              borderLeftColor: $selected || $isHovered ? theme.colors.purpleLight : 'transparent',
              borderRightColor: $selected || $isHovered ? theme.colors.purpleLight : 'transparent',
              borderTopColor: $selected || $isHovered ? theme.colors.purpleLight : 'transparent',
              borderBottomColor: $selected || $isHovered ? theme.colors.purpleLight : 'transparent',
              backgroundColor: $selected || $isHovered ? theme.colors.purpleLight : 'transparent'
            }
          })
        }
      }}
    />
  );
};

export default Datepicker;
