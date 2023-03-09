'use client'
import React from 'react';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import Link from 'next/link';
import { auth } from '@/db/firebase';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const router = useRouter();

    const login = () => {
        if (!email || !password) {
            setError(true);
            return;
        }
        auth.signInWithEmailAndPassword(email, password).then(() => {
            router.push('/');
        })
    }
    
    return (
        <Container
            display="flex"
            alignItems="center"
            justify="center"
            css={{ minHeight: '80vh' }}
        >
            <Card css={{ mw: '420px', p: '20px' }}>
            <Text
                size={24}
                weight="bold"
                css={{
                as: 'center',
                mb: '20px',
                }}
            >
                Iniciar Sesion
            </Text>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                status={error ? 'error' : 'default'}
            />
            <Spacer y={1} />
            <Input.Password
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                status={error ? 'error' : 'default'}
                helperText={error ? 'El Email o la contraseña son incorrectos' : ''}
                helperColor="error"
            />
            <Spacer y={2} />
            <Row justify="space-between">
                <Checkbox>
                <Text size={14}>Remember me</Text>
                </Checkbox>
                <Link href="/forgot-password">
                    <Text size={14}>Forgot password?</Text>
                </Link>
            </Row>

            <Spacer y={1} />

            <Button onPress={login}>Sign in</Button>
            </Card>
        </Container>
    );
}