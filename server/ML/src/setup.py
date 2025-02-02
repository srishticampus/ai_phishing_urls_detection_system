"""
This file is used to install the package. It is used to install the package in the development mode.
"""
from setuptools import setup, find_packages

setup(
    name="src",
    version="1.0",
    packages=find_packages(),  # Automatically finds `src` and submodules
)
