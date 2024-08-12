import { Typography } from '@mui/material';

interface TextProps {
  textVariant:
    | 'H1Headline'
    | 'H1Title'
    | 'SubtitleBold'
    | 'SubtitleRegular'
    | 'BodyBold'
    | 'BodyRegular'
    | 'Body2Bold'
    | 'Body2Regular'
    | 'Button'
    | 'BottomMenuBold'
    | 'BottomMenuRegular'
    | 'CaptionMenuBold'
    | 'CaptionMenuRegular';
  children: React.ReactNode;
}

export default function TypedText({ textVariant, children }: TextProps) {
  switch (textVariant) {
    case 'H1Headline':
      return (
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'H1Title':
      return (
        <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'SubtitleBold':
      return (
        <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'SubtitleRegular':
      return (
        <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
          {children}
        </Typography>
      );
    case 'BodyBold':
      return (
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'BodyRegular':
      return (
        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
          {children}
        </Typography>
      );
    case 'Body2Bold':
      return (
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'Body2Regular':
      return (
        <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
          {children}
        </Typography>
      );
    case 'Button':
      return (
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'BottomMenuBold':
      return (
        <Typography sx={{ fontSize: 12, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'BottomMenuRegular':
      return (
        <Typography sx={{ fontSize: 12, fontWeight: 400 }}>
          {children}
        </Typography>
      );
    case 'CaptionMenuBold':
      return (
        <Typography sx={{ fontSize: 10, fontWeight: 500 }}>
          {children}
        </Typography>
      );
    case 'CaptionMenuRegular':
      return (
        <Typography sx={{ fontSize: 10, fontWeight: 400 }}>
          {children}
        </Typography>
      );
    default:
      return (
        <Typography sx={{ fontSize: 16, fontWeight: 400 }}>
          {children}
        </Typography>
      );
  }
}
