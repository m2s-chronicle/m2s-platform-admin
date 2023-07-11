//* React Import
import { ReactElement, useState } from 'react';

//* Next Import
import Link from 'next/link';
import { useRouter } from 'next/router';

//* Loyout Import
import type { NextPageWithLayout } from '@/pages/_app';
import BlankLayout from '@/layouts/blank/BlankLayout';

//* MUI Import
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import MuiCard, { CardProps } from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import OutlinedInputElement from '@/components/form/OutlineInputElement';
import TextFieldElement from '@/components/form/TextFieldElement';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';

// theme settings
import themeConfig from '@/configs/themeConfig';

//* SVG components
import LogoSymbol from '../../../../public/static/svg/logo-symbol.svg';

//* react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';

//* Utils
import { emailValid, passwordValid } from '@/utils/validation';

interface IFormInputs {
  email: string;
  password: string;
}
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' },
}));

const LinkStyled = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const LoginPage: NextPageWithLayout = () => {
  // hooks
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<IFormInputs>({
    defaultValues: { email: 'admin@test.com', password: 'admin12!@' },
  });

  const onSubmitLogin: SubmitHandler<IFormInputs> = async (data) => {
    setIsLoading((prev) => !prev);
    try {
      if (data.email === 'admin@test.com' && data.password === 'admin12!@') {
        console.log('[OK]로그인성공');
        //TODO: async API
        router.push('/dashboard');
        setTimeout(() => {
          setIsLoading((prev) => !prev);
        }, 1000);
      } else {
        //TODO: error
        setIsLoading((prev) => !prev);
        alert('[ERROR]로그인/비밀번호가 맞지 않음.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="content-center">
      <Card>
        <CardContent sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 7,
            }}
          >
            <LogoSymbol />
            <Typography variant="h6" component="span" sx={{ marginLeft: 1 }}>
              {themeConfig.templateName} ADMIN CENTER
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Welcome to {themeConfig.templateName} Admin! 👋🏻
            </Typography>
            <Typography variant="body2">Please sign-in to your account and start managing the platform</Typography>
          </Box>

          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmitLogin)}>
            <TextFieldElement
              name="email"
              control={control}
              textFieldProps={{
                label: 'Email',
                placeholder: 'admin@test.com',
                fullWidth: true,
                autoFocus: true,
                margin: 'normal',
                sx: { marginBottom: 4 },
                type: 'email',
              }}
              rules={emailValid}
            />

            <OutlinedInputElement
              name="password"
              control={control}
              inputProps={{
                label: 'Password',
                type: isShowPassword ? 'text' : 'password',
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setIsShowPassword(!isShowPassword)}>
                      {isShowPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              rules={passwordValid}
            />
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
              startIcon={<></>}
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ my: 3 }}
            >
              <span>Login</span>
            </LoadingButton>
          </Box>

          <Divider sx={{ my: 5 }}>OR</Divider>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ marginRight: 2 }}>
              관리자계정이 없으신가요?
            </Typography>
            <Typography variant="body2">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <LinkStyled>관리자 신청</LinkStyled>
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactElement) => <BlankLayout>{page}</BlankLayout>;

export default LoginPage;
