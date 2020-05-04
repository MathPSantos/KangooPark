export default {
    khandBold: 'Khand-Bold',
    khandSemiBold: 'Khand-SemiBold',
    khandMedium: 'Khand-Medium',
  };
  
  export interface FontsProps {
    khandBold: string;
    khandSemiBold: string;
    khandMedium: string;
  }
  
  export type TextOptions = keyof FontsProps;