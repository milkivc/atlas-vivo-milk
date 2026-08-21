import importlib.util
from pathlib import Path

p = Path(__file__).with_name('ptservidor_uapi.py')
spec = importlib.util.spec_from_file_location('pt', p)
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)


def test_write_gate_closed_by_default():
    assert m.ALLOW_WRITE is False
    try:
        m.create_migration_ftp('atlasmigtest')
    except RuntimeError as e:
        assert str(e) == 'REMOTE_WRITE_GATE_CLOSED'
    else:
        raise AssertionError('write gate must be closed')


def test_no_auth_is_explicit():
    if not m.TOKEN and not m.PASSWORD:
        try:
            m._auth_header()
        except RuntimeError as e:
            assert str(e) == 'NO_CPANEL_AUTH_REFERENCE'
        else:
            raise AssertionError('missing auth must be explicit')


def test_status_parser():
    assert m.status_ok({'result': {'status': 1}})
    assert not m.status_ok({'result': {'status': 0}})
