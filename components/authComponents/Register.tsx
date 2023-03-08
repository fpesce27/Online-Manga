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

export default function Register() {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState(false);
    const router = useRouter();

    const register = () => {
        if (!email || !password || !username || !confirmPassword) {
            setError(true);
            return;
        }
        if (password !== confirmPassword) {
            setError(true);
            return;
        }
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user!;
            user.updateProfile({
                displayName: username
            })
        }).then(() => {
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
                Registrarse
            </Text>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                status={error ? 'error' : 'default'}
            />
            <Spacer y={1} />
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
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                status={error ? 'error' : 'default'}
            />
            <Spacer y={1} />
            <Input.Password
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                status={error ? 'error' : 'default'}
                helperText={error ? 'Email or password is incorrect' : ''}
                helperColor="error"
            />
            <Spacer y={2} />
            <Row justify="space-between">
                <Checkbox>
                <Text size={14}>Recordarme</Text>
                </Checkbox>
                <Link href="/forgot-password">
                    <Text size={14}>Olvidaste Contraseña?</Text>
                </Link>
            </Row>

            <Spacer y={1} />

            <Button onClick={register}>Registrarse</Button>
            </Card>
        </Container>
    );
}