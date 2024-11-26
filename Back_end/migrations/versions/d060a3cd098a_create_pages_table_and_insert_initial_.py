"""create pages table and insert initial data

Revision ID: d060a3cd098a
Revises: f31234ae5aa2
Create Date: 2024-11-26 13:43:00.922659

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'd060a3cd098a'
down_revision: Union[str, None] = 'f31234ae5aa2'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    
    pass


def downgrade() -> None:
    pass
